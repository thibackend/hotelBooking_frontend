import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmingPool, faBed, faUmbrellaBeach, faTree, faPalette, faSnowboarding, faCoffee  } from '@fortawesome/free-solid-svg-icons';


export default class Hero extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeIndex: 0, // Chỉ mục danh mục hiện tại được chọn
      };
    }
  
    handleCategoryClick = (index) => {
      this.setState({ activeIndex: index });
    };
  
    render() {
      const categories = [
        { name: 'Hồ bơi tuyệt vời', icon: faSwimmingPool },
        { name: 'Phòng', icon: faBed },
        { name: 'Bãi biển', icon: faUmbrellaBeach },
        { name: 'Nông thôn', icon: faTree },
        { name: 'Thiết kế', icon: faPalette },
        { name: 'Trượt tuyết', icon: faSnowboarding },
        { name: 'phục vụ bữa sáng', icon: faCoffee },
        // icon({name: 'user', family: 'classic', style: 'solid'}),
        // icon({name: 'user', family: 'classic', style: 'regular'}),

        // icon({name: 'user'}),
      ];
      
  
      return (
        <div>
          <div className="menu">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`menu-item ${index === this.state.activeIndex ? 'active' : ''}`}
                onClick={() => this.handleCategoryClick(index)}
              >
                <FontAwesomeIcon icon={category.icon} />
                <span>
                  <span>{category.name}</span>
                </span>
                
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  
