// .single__modal .sum{
//     color: var(--color-primary-variant);
//     font-weight: 500;
//     font-size: 1.2rem;
// }

// .place__bid{
//     color: var(--color-bg-variant);
//     background: var(--color-bg);
//     width: 4rem;
//     height: 1.8rem;
//     border-radius: 20px;
//     font-size: 1.2rem;
//     display: block;
// }

// .place__bid:hover{
//     color: var(--color-primary-variant);
//     /* border: 2px solid var(--color-primary-variant); */
//     transition: 0.3s;
// }

// .input__item input{
//     width: 100%;
//     border: 1px solid var(--color-bg-variant);
//     background: var(--color-bg);
//     color: var(--color-bf-variant);
//     outline: none;
//     border-radius: 5px;
//     padding: 4px;
// }

// .input__item__text{
//     margin-top: 1rem;
// }

// .price__info{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }
// .single__modal h6, 
// .single__modal p {
//     font-size: 1.2rem;
// }
// .price__info p{
//     font-size: 1.2rem;
// }

// .price__box{
//     margin-top: 1rem;
// }







//  <h6>Place a Bid</h6>
// <p>The minimal sum is <span className='sum'>$10 USD</span></p>
// <span className="close__modal"><AiOutlineCloseSquare size={30} onClick={()=>setShowModal(false)} /></span>


// <div className="input__item">
//     <input type="number" placeholder='00.00' />
// </div>

// <div className="input__item">
//     <h6 className="input__item__text">Enter Quantity, 7 available</h6>
//     <input type="number" placeholder='Enter quantity' />
// </div>

// <div className="price__box">
//     <div className='price__info'> 
//         <p>Service Fee</p>
//         <span className='sum'>$10 USD</span>
//     </div>

//     <div className='price__info'> 
//         <p>Minimal Sum</p>
//         <span className='sum'>$10 USD</span>
//     </div>

//     <div className='price__info'> 
//         <p>Total Sum</p>
//         <span className='sum'>$10 USD</span>
//     </div>
// </div>

// <button className='place__bid'>
//         Bid
// </button>




const item = 
    {
      id: "002",
      title: "Medieval: Male",
      info: "Medieval male character",
      imgUrl: male_medieval,
      author: "Codebear",
      authorImg: codebear_avatar,
      price: 10,
      cardStyle: 'var(--color-card-dark)'
    }

<section>   
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
                <h5>Preview Item</h5>
                <Card item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <dir className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor=''>Upload File</label>
                    <input type="file" className="upload__input"/>
                  </div>

                   <div className="form__input">
                    <label htmlFor=''>Price</label>
                    <input type="number" placeholder="Price per item" />
                  </div>

                  <div className="form__input">
                    <label htmlFor=''>Minimal price</label>
                    <input type="number" placeholder="Minimal price" />
                  </div>

                  <div className="date__box">
                    <div className="form__input">
                      <label htmlFor=''>Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input">
                      <label htmlFor=''>Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor=''>Title</label>
                    <input type="text" placeholer="Enter title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor=''>Description</label>
                    <textarea className="input__text" type="date" id="" rows="10" placeholder="Enter description"></textarea>
                  </div>

                </form>
              </dir>
            </Col>


          </Row>
        </Container>
      </section>
