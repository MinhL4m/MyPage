import anime from 'animejs/lib/anime.es.js';
// equation of a line
const lineEq = (y2: number, y1: number, x2: number, x1: number, currentVal: number): number => {
    // y = mx + b
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;
    return m * currentVal + b;
}

const PATH_ID: string = "M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z;M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z;M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z"

// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = (e: any) => {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    return {
        x: posx,
        y: posy
    };
};

export class MorphingBG {
    DOM: any
    paths: Array<String>
    win: any = {}
    tilt: any = {}
    constructor(el: HTMLElement | null) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.el.style.transition = 'transform 1s ease-out';
        this.DOM.pathEl = this.DOM.el.querySelector('path');
        this.paths = PATH_ID.split(';')
        this.paths.splice(this.paths.length, 0, this.DOM.pathEl.getAttribute('d'));
        this.win = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.tilt = {
            tx: this.win.width / 8,
            ty: this.win.height / 4,
            rz: 45,
            sx: [0.8, 2],
            sy: [0.8, 2]
        }
        this.animate()
        this.initEvents();
    }
    //make the animation smooth
    animate() {
        anime.remove(this.DOM.pathEl);
        anime({
            targets: this.DOM.pathEl,
            duration: 10000,
            easing: 'cubicBezier(0.5, 0, 0.5, 1)',
            d: this.paths,
            loop: true
        });
    }

    // Mousemove event / Tilt functionality.
     onMouseMoveFn = (ev: any) => {

        requestAnimationFrame(() => {
            const mousepos = getMousePos(ev);
            const rotZ = 2 * this.tilt.rz / this.win.height * mousepos.y -this. tilt.rz;
            const scaleX = mousepos.x < this.win.width / 2 ? lineEq(this.tilt.sx[0], this.tilt.sx[1], this.win.width / 2, 0, mousepos.x) : lineEq(this.tilt.sx[1], this.tilt.sx[0], this.win.width, this.win.width / 2, mousepos.x);
            const scaleY = mousepos.y < this.win.height / 2 ? lineEq(this.tilt.sy[0], this.tilt.sy[1], this.win.height / 2, 0, mousepos.y) : lineEq(this.tilt.sy[1], this.tilt.sy[0], this.win.height, this.win.height / 2, mousepos.y);
            const transX = 2 * this.tilt.tx / this.win.width * mousepos.x - this.tilt.tx;
            const transY = 2 * this.tilt.ty / this.win.height * mousepos.y - this.tilt.ty;
            this.DOM.el.style.transform = `translate3d(${transX}px, ${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX},${scaleY},1)`;
        })
    };


    initEvents() {
        document.querySelector('.hero')?.addEventListener('mousemove', this.onMouseMoveFn);
        document.querySelector('.hero')?.addEventListener('touchstart', this.onMouseMoveFn);
    }

    removeEvents(){
        document.querySelector('.hero')?.removeEventListener('mousemove', this.onMouseMoveFn);
        document.querySelector('.hero')?.removeEventListener('touchstart', this.onMouseMoveFn);
    }
};