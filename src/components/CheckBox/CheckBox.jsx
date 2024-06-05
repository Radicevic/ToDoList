import "./CheckBox.css"

export function CheckBox ({ title, change, value }) {
    return(
        <label className="checkBox">
        <input type="checkbox" onChange={change} checked={value} />
        {title}</label>
    )
}