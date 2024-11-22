import { Input } from "../Styles/Forms.js"

const Forms = ({id, label, setValue, ...props}) => {
    return (
        <>
            <Input
                id={id}
                name={id}
                onChange={({target}) => setValue(target.value)}
                placeholder=""
                {...props}
            />
        </>
    )
}

export default Forms;