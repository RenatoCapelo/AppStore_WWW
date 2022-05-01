import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  id = "tsparticles";
  particlesOptions:ISourceOptions = {
    background: {
        color: {
            value: "#0d47a1"
        }
    },
    fpsLimit: 144,
    interactivity: {
        events: {
            // onClick: {
            //     enable: true,
            //     mode: "push"
            // },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    },
    detectRetina: true
};
  ngOnInit(): void {
  }

}
