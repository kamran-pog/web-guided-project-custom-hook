import { useLocalStorgae } from "./useLocalStorage";

export const useForm = (key, initialValue, cb) => {
    const [values, setValues] = useLocalStorgae(key, initialValue)

    const clearForm = () => {
        setValues(initialValue);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        cb();
    }

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return [values, clearForm, handleChanges, handleSumbit]
}