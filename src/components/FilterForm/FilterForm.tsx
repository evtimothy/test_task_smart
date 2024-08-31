import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { setFilters } from "../../store/slices/userSlice";
import { IUserFilter } from "../../store/types/user";
import DefaultInput from "../ui/Input/DefaultInput";
import styles from "./FilterForm.module.scss";

type UserFilterKeys = keyof IUserFilter;

const inputTypes: UserFilterKeys[] = ["name", "username", "email", "phone"];

const FilterForm = () => {
  const dispatch = useDispatch();
  const { filters } = useAppSelector((store) => store.user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name in filters) {
      dispatch(setFilters({ [name]: value }));
    }
  };

  return (
    <>
      <h3 className={styles.title}>FILTERS</h3>
      <div className={styles.inputs}>
        {inputTypes.map((type) => (
          <DefaultInput
            onChange={handleInputChange}
            value={filters[type]}
            id={`${type}_id`}
            name={type}
            placeholder={`filter by ${type}`}
            className={styles.input}
          />
        ))}
      </div>
    </>
  );
};

export default FilterForm;
