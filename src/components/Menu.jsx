
import Swal from 'sweetalert2';
import recipes from '../recipes';

export default function Menu(){

    const handleOrder = () => {
        Swal.fire({
            title: "Do you want to confirm this order?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been processed.",
                icon: "success"
              });
            }
          });
    }


    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            {/* Menu cards */}
            <div className="cards">
                {
                    recipes.map( recipe => 
                        <div key={recipe.id} className="menu-items">
                            <img src={recipe.image} alt="recipe-img" />
                            <div className="menu-content">
                                <div className="heading">
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

