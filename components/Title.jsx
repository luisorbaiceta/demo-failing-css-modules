import style from './Title.module.css'

const Title = ({text}) => {
  return <h1 className={style.root}>{text}</h1>
}

export default Title