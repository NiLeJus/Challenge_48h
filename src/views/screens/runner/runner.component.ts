import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-runner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  runner: boolean = true
  characterX = 50;
  characterY = 150;
  initialY = 150;
  velocityX = 0;
  velocityY = 0;
  isJumping = false;
  isSneaking = false;
  characterHeight = 40;
  moveSpeed = 5;
  gravity = 1;
  jumpStrength = 15;
  jumpDirection = 0;
  gameInterval: any;

  obstacles = [
    { x: 0, y: 0, width: 40, height: 200 }, // mur gauche
    { x: 0, y: 190, width: 2100, height: 40, isGround: true }, // sol (ne compte pas comme obstacle)
    { x: 0, y: 0, width: 2100, height: 20, isGround: true }, // plafond (ne compte pas comme obstacle)
    { x: 2100, y: 0, width: 20, height: 200 }, // plafond (ne compte pas comme obstacle)

    // { x: 1660, y: 0, width: 40, height: 200 }, // mur gauche



    { x: 300, y: 130, width: 20, height: 70 }, //1er obstacle (saut)
    { x: 500, y: 0, width: 20, height: 160 }, //2e obstacle (sneak)
    { x: 700, y: 150, width: 20, height: 40 }, //3e obstacle (petit saut)
    { x: 900, y: 0, width: 20, height: 140 },
    { x: 980, y: 0, width: 20, height: 140 },
    { x: 940, y: 50, width: 20, height: 20, isMiam: true },
    { x: 980, y: 0, width: 20, height: 200, isBariere: true },
    { x: 1070, y: 130, width: 20, height: 70 },
    { x: 1200, y: 0, width: 20, height: 160 },
    { x: 1300, y: 130, width: 20, height: 70 },
    { x: 1400, y: 130, width: 20, height: 70 },

    { x: 1550, y: 100, width: 20, height: 20, isTP: true },


    { x: 1750, y: 0, width: 20, height: 200, isFinalBarriere: true },




  ];


  ngOnInit() {
    // Démarrer la boucle de jeu
    this.gameInterval = setInterval(() => this.gameLoop(), 20);
  }

  // Boucle de jeu principale
  gameLoop() {
    const newX = this.characterX + this.velocityX;

    // Vérifier les collisions avant de déplacer
    if (this.checkCollision(newX, this.characterY)) {
      this.characterX = 50;  // Position initiale (x)
      this.characterY = 150; // Position initiale (y)
      this.velocityX = 0;    // Arrêter le mouvement horizontal
      this.isJumping = false; // Réinitialiser le saut
      this.jumpDirection = 0; // Réinitialiser la direction du saut
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    } else {
      this.characterX = newX;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'ArrowRight') {
      this.velocityX = this.moveSpeed;
      if (this.isJumping) {
        this.jumpDirection = -1;
      }
    } else if (event.code === 'ArrowLeft') {
      this.velocityX = -this.moveSpeed;
      if (this.isJumping) {
        this.jumpDirection = 1;
      }
    } else if ((event.code === 'Space' || event.code === 'ArrowUp') && !this.isJumping) {
      this.jump();
    } else if (event.code === 'ArrowDown' && !this.isSneaking) {
      this.sneak(true);  // Activer le mode sneak
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    // Arrêter le mouvement horizontal quand on relâche les touches
    if (event.code === 'ArrowRight' && this.velocityX > 0) {
      this.velocityX = 0;
    } else if (event.code === 'ArrowLeft' && this.velocityX < 0) {
      this.velocityX = 0;
    }

    // Désactiver le sneak lorsque la touche est relâchée
    if (event.code === 'ArrowDown' && this.isSneaking) {
      this.sneak(false);  // Désactiver le mode sneak
    }
  }

  jump() {
    if (this.isJumping) return;
    this.isJumping = true;
    let jumpVelocity = this.jumpStrength;
    let horizontalVelocity = this.velocityX;

    let jumpInterval = setInterval(() => {
      // Calculer la nouvelle position pendant le saut
      const newX = this.characterX + horizontalVelocity;
      const newY = this.characterY - jumpVelocity;

      // Vérifier les collisions avant de déplacer
      if (!this.checkCollision(newX, newY)) {
        this.characterX = newX;
        this.characterY = newY;
      } else {
        // Si collision, arrêter le mouvement
        horizontalVelocity = 0;
      }

      jumpVelocity -= this.gravity;

      // Si on est de retour au sol
      if (this.characterY >= this.initialY && jumpVelocity <= 0) {
        clearInterval(jumpInterval);
        this.isJumping = false;
        this.characterY = this.initialY;
        this.jumpDirection = 0;
      }

      // Appliquer le mouvement diagonal si nécessaire
      if (this.jumpDirection === 1) {
        const newX = this.characterX - 1;
        if (!this.checkCollision(newX, this.characterY)) {
          this.characterX = newX;
        }
      } else if (this.jumpDirection === -1) {
        const newX = this.characterX + 1;
        if (!this.checkCollision(newX, this.characterY)) {
          this.characterX = newX;
        }
      }
    }, 20);
  }

  sneak(isSneaking: boolean) {
    if (isSneaking) {
      // Activer le mode sneak
      this.isSneaking = true;
      const originalHeight = this.characterHeight;
      const reducedHeight = 20; // Hauteur réduite

      const heightDifference = originalHeight - reducedHeight;

      this.characterHeight = reducedHeight;
      this.characterY = this.characterY + heightDifference;
    } else {
      // Désactiver le mode sneak
      this.isSneaking = false;
      const originalHeight = 40; // Hauteur normale
      const reducedHeight = 20;

      const heightDifference = originalHeight - reducedHeight;

      this.characterHeight = originalHeight;
      this.characterY = this.characterY - heightDifference;
    }
  }
  checkCollision(newX: number, newY: number): boolean {
    return this.obstacles.some(obstacle => {
      if (obstacle.isGround) return false;

      const isColliding = newX < obstacle.x + obstacle.width &&
        newX + 40 > obstacle.x &&
        newY < obstacle.y + obstacle.height &&
        newY + this.characterHeight > obstacle.y;

      if (obstacle.isMiam && isColliding) {
        this.handleMiamCollision();
      }

      if (obstacle.isTP && isColliding) {
        this.handleTPCollision();
      }

      return isColliding;
    });
  }


  handleMiamCollision() {
    console.log("Collision avec l'objet Miam détectée !");

    // Supprimer tous les obstacles "isBariere" après la collision avec "Miam"
    this.obstacles = this.obstacles.filter(obstacle => !obstacle.isBariere);
    this.obstacles = this.obstacles.filter(obstacle => !obstacle.isMiam);

    // Tu peux ici ajouter d'autres actions, comme augmenter un score ou jouer un son
  }

  handleTPCollision() {
    console.log("Collision avec l'objet TP détectée !");
    const gameContainer = document.querySelector('.game-container') as HTMLElement;
    if (gameContainer) {
      gameContainer.style.overflow = 'visible';
      // gameContainer.style.overflowY = 'hidden';
      this.obstacles = this.obstacles.filter(obstacle => !obstacle.isTP);
      this.obstacles = this.obstacles.filter(obstacle => !obstacle.isFinalBarriere);


    }
  }

  resetView() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.runner = false;
  }


}
