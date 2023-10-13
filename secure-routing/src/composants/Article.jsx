import { useNavigate } from "react-router-dom"


const Article = ({article, mode}) => {

    const firefox = useNavigate() ;   



const goNavigate = () => {
    console.log("mode :",mode);
    if (mode == "admin") {
        firefox(`/admin/article/${article.id}`)
    } else {
        firefox(`/article/${article.id}`)
    }

}




    return (
        <>
                <li><span>Désignation : {article.label} <button type="button" onClick={goNavigate}>détails</button></span></li>
        </>
    )
}

export default Article