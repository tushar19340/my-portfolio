

// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(1,8);
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill('rgba(200,169,169,0.5)');
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<85) {
            stroke('rgba(255,255,0,0.4)');
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    // for cursor
    let num = 50;
    let mx = [];
    let my = [];

    function setup() {
        var canvas = createCanvas(windowWidth, windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        for(let i = 0;i<width/10;i++){
            particles.push(new Particle());
        }

        noStroke();
        // fill(255, 153);
        for (let i = 0; i < num; i++) {
            mx.push(i);
            my.push(i);
        }
    }
    
    function draw() {
        background(25,6,4);
        for(let i = 0;i<particles.length;i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
        
        // for cursor below
        let which = frameCount % num;
        mx[which] = mouseX;
        my[which] = mouseY;
    
        for (let i = 0; i < num; i++) {
            // which+1 is the smallest (the oldest in the array)
            let index = (which + 1 + i) % num;
            fill(255,255 ,0, 63);
            ellipse(mx[index], my[index], i, i);
        }
    }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
    