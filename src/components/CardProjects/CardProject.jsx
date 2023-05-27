import Icon from '../Icon/Icon'
import MyButton from '../MyButton/MyButton'
import './CardProject.scss'


export default function CardProject() {
    return (
        <div className="project">
                <div className="project__img">
                    <img src="" alt="" />
                </div>

                <div className="project__info">

                    <p className="h2  color-fucsia">Lorem Ipsum</p>

                    <div className="project__info__title">
                        <p className="font-size-24-s">0.1</p>
                        <p className="font-size-16-xxs">lorem ipsum dolor met</p>
                        <hr className="horizontal-line horizontal-line--big-center"></hr>
                    </div>

                    <div className="project__info__tools">
                        <p className="font-size-24-s">0.2</p>
                        <Icon></Icon>
                        <Icon></Icon>
                        <Icon></Icon>
                        <hr className="horizontal-line horizontal-line--big-center"></hr>
                    </div>

                    <div className="project__info__abstract">
                        <p className="font-size-24-s">0.3</p>
                        <p className="font-size-16-xxs">Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit. Donec ultricies nibh sit amet 
                         ipsum tristique, ac venenatis nulla fermentum. In commodo 
                         libero at lorem scelerisque, ac blandit turpis finibus. 
                         Fusce malesuada sapien sed velit aliquet luctus</p>
                        <hr className="horizontal-line horizontal-line--big-center"></hr>
                    </div>

                    <div className="project__info__buttons">
                        <MyButton></MyButton>
                        <MyButton></MyButton>                    
                    </div>
                </div>
            </div>
    )
}