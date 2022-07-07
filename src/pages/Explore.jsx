import React, { useState } from 'react'
import '../styles/explore.css'
import CommonSection from '../components/ui/common/CommonSection'
import Card from '../components/ui/cards/Card'
import { DATA }  from '../assets/data/data.js'
import { Container, Row, Col } from 'reactstrap'

const Explore = () => {

  const [data, setData] = useState(DATA)

//----------------------------------
  const handleTheme = (e) => {
    const filterTheme = e.target.value;

      if(filterTheme === 'default'){
        const filterData = DATA.filter(item => item.theme !== "default")
        setData(filterData)
      }

      if(filterTheme === 'medieval'){
        const filterData = DATA.filter(item => item.theme === "medieval")
        setData(filterData)
      }
      if(filterTheme === 'scifi'){
        const filterData = DATA.filter(item => item.theme === "scifi")
        setData(filterData)
      }
      if(filterTheme === 'postapoc'){
        const filterData = DATA.filter(item => item.theme === "postapoc")
        setData(filterData)
      }
      if(filterTheme === 'tiles'){
        const filterData = DATA.filter(item => item.theme === "tiles")
        setData(filterData)
      }

  };
//----------------------------------
  const handleItem = (e) => {
      const filterTheme = e.target.value;

      if(filterTheme === 'default'){
        const filterData = DATA.filter(item => item.author !== "")
        setData(filterData)
      }

      if(filterTheme === 'codebear'){
        const filterData = DATA.filter(item => item.author === "Codebear")
        setData(filterData)
      }

  };
 
//----------------------------------
  return (
    <>
      <CommonSection title={'Collection of Cards'} />

      <section className='explore__collections'>
        <Container>
          <Row>
            <Col lg='12'> 
              <div className="collection__filter">
                <div className="filter__left">

                  <div className="all__category__filter">
                    <select onChange={handleTheme}>
                      <option value="default">All Themes</option>
                      <option value="medieval">Medieval/Fantasy</option>
                      {/* <option value="scifi">Science Fiction</option>
                      <option value="postapoc">Post Apocalyptic</option>
                      <option value="tiles">Tiles</option> */}
                    </select>
                  </div>
                
                  <div className="all__items__filter">
                    <select onChange={handleItem}>
                      <option value="default">All Authors</option>
                      <option value="codebear">Codebear</option>
                    </select>
                  </div>
                </div>
 
              </div>
            </Col>
            
            {
              data?.map((item)=>(
                  <Col lg='3' md='4' sm='6' key={item.id}>
                    <Card item={item} />
                  </Col>
              ))
            }
           
          </Row>
        </Container>
      </section>
    </>
     
  )
}

export default Explore