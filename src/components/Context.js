import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Stupid old men Head",
                "src": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d04dc018490209.562ca54e1d53c.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Men/Woman base mesh",
                "src": "https://www.renderhub.com/novisoj/realistic-white-male-and-female-low-poly-free-3d-model/realistic-white-male-and-female-low-poly-free-3d-model-01.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Astronaut High Poly",
                "src": "https://www.3dart.it/wp-content/uploads/2019/12/Astronaut-Free-3D-Model.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Siberian Husky h.poly",
                "src": "https://i.pinimg.com/originals/b5/af/70/b5af70a7c5e8f0df595cc0a23fbcf949.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "John Wick stylized l.poly",
                "src": "https://i.pinimg.com/564x/1e/2f/a0/1e2fa02be28602803862c6104aa79e96.jpg",
                "description": "Model by Dinsai studio",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Prayer Bridge, Modular",
                "src": "https://i.pinimg.com/564x/82/1b/80/821b80705d5d5cb5e1490b1279494bb3.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "The Parallel",
                "src": "https://i.pinimg.com/564x/94/0a/1b/940a1b5e3cd32bacc23b5d5704a431fc.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Goku",
                "src": "https://www.renderhub.com/blackstar90/goku-ultra-instinct-high-quality-dragon-ball-super/goku-ultra-instinct-high-quality-dragon-ball-super-04.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "sign hands rig",
                "src": "https://i.pinimg.com/564x/ce/32/0f/ce320fcc0ad54912e2b288961d65523a.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Hydra Sculpt",
                "src": "https://p.turbosquid.com/ts-thumb/nd/0mQwlM/6z/screenshot_8cc/png/1643751341/600x600/fit_q87/79ebe6386979e79c6dbe7faae7e0eed6fd228734/screenshot_8cc.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Skull",
                "src": "https://d1a9v60rjx2a4v.cloudfront.net/2016/04/21/11_02_38_526_Skull_Final_Copyright_05.jpg",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Wooden Dummy Doll",
                "src": "https://cdna.artstation.com/p/marketplace/presentation_assets/000/196/978/large/file.jpg?1567700343",
                "description": "Website is made by Koyo",
                "content": "If I could save time in a bottle The first thing that I'd like to do Is to save every day 'til eternity passes away",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    addUser = () => {
        
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


