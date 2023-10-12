import { useNavigate } from "react-router-dom"


const Article = ({article}) => {

const firefox = useNavigate() ;   

    return (
        <>
                <li><span>Désignation : {article.label} <button type="button" onClick={() => firefox(`/article/${article.id}`)}>détails</button></span></li>
        </>
    )
}

export default Article