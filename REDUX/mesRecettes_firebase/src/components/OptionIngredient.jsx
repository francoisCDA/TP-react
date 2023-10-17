const OptionIngredient = ({ingredient}) => {

    return (
        <>
            <option value={`${ingredient.id}`}>{ingredient.name}</option>
        </>
    )
}

export default OptionIngredient