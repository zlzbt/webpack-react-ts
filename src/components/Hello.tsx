import React from "react";

export interface HelloProps { compiler: string; framework: Number; }

export class Hello extends React.Component<HelloProps, {}> {

    componentDidMount(){
        this.drawImg.call(this);
    }

    drawImg = () => {
        // 需要使用类型断言，不然编译不通过
        const mycanvas = document.getElementById('mycanvas') as HTMLCanvasElement;
        let ctx = mycanvas.getContext('2d') as CanvasRenderingContext2D ;
        const img = new Image()
        img.src = '../assets/spritesheet.png';
        img.onload = function () {
            ctx.drawImage(img,0,0,100,100);
        }
    }

    render() {
        return <>
            {/* <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1> */}
            <canvas id={'mycanvas'}></canvas>
        </>
    }
}