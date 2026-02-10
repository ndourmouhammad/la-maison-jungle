import '../styles/Categories.css'

function Categories({ categories, selectedCategory, onCategoryChange, onReset }) {
    return (
        <div className='lmj-categories'>
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className='lmj-categories-select'
            >
                <option value="">---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={onReset} className='lmj-categories-reset'>
                Réinitialiser
            </button>
        </div>
    )
}

export default Categories
