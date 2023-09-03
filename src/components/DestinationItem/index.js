import './index.css'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const DestinationItem = props => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }

  const {destinationDetails} = props
  const {imageURL, name, description, id} = destinationDetails
  return (
    <div className="destination-item-container">
      <div>
        <div className="image-container">
          <img
            className="destination-item-image"
            src={imageURL}
            alt={`project-item${id}`}
          />
          <button type="button" className="r-button">
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693663285/Vector_q4arlk.png"
              alt="star"
            />
            4.8
          </button>
          <button type="button" className="exclusive">
            EXCLUSIVE
          </button>
        </div>
        <h4>{name}</h4>
        <p className="p-desc">{description}</p>
      </div>
    </div>
  )
}

export default DestinationItem
// import Slider from 'react-slick'
// import {Component} from 'react'

// import './index.css'

// const settings = {
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 7,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 7,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 6,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// }

// class DestinationItem extends Component {
//   renderSlider = destinationDetails => (
//     <div>
//       <Slider {...settings}>
//         {destinationDetails.map(eachLogo => {
//           const {userName, storyUrl, userId} = eachLogo
//           return (
//             <div className="slick-item" key={userId}>
//               <img className="logo-image" src={storyUrl} alt="user story" />
//               <p className="story-name">{userName}</p>
//             </div>
//           )
//         })}
//       </Slider>
//     </div>
//   )

//   render() {
//     const {storiesList} = this.props

//     return (
//       <div className="main-container">
//         <div className="slick-container">{this.renderSlider(storiesList)}</div>
//       </div>
//     )
//   }
// }

// export default DestinationItem
