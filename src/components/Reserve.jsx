import React from 'react'
import '../components/styles/reserve.css'

const Reserve = () => {
  return (
    <section className="reserve">
        <div class="main_container">
            <div class="left_container">
                <h1 class="reserve_heading">Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
                <p class="reserve_para">Make online reservations, read restaurant reviews from dinners and earn points towards free meals. OpenTable is a real-time online reservation</p>
                <button class="reserve_btn">Make Reservatoin</button>
            </div>
    
            <div class="right_container">
                <div class="img_container">
                    <img src="./images/food.png" alt="img" class="food_img"/>
                </div>
            </div>
        </div>

            <div class="bottom-main-container">
                <div class="reviews-heading">
                    <h1>What Our Customers Say ?</h1>
                </div>

                <div class="cards-container">
                    <div class="review-card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam, assumenda porro incidunt blanditiis quos consequuntur in perspiciatis enim delectus iste aliquam. Provident, dignissimos alias expedita omnis culpa veritatis doloremque?
                        <div>
                            <img class="user-img" src="./images/user.png" alt="user"/>
                        </div>    
                        <span class="user-name">User 1</span>
                    </div>

                    <div class="review-card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam, assumenda porro incidunt blanditiis quos consequuntur in perspiciatis enim delectus iste aliquam. Provident, dignissimos alias expedita omnis culpa veritatis doloremque?
                        <div>
                            <img class="user-img" src="./images/user.png" alt="user"/>
                        </div>
                        <span class="user-name">User 2</span>

                    </div>

                    <div class="review-card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam, assumenda porro incidunt blanditiis quos consequuntur in perspiciatis enim delectus iste aliquam. Provident, dignissimos alias expedita omnis culpa veritatis doloremque?
                        <div>
                            <img class="user-img" src="./images/user.png" alt="user"/>
                        </div>
                        <span class="user-name">User 3</span>

                    </div>
                </div>
            </div>
    </section>
  )
}

export default Reserve