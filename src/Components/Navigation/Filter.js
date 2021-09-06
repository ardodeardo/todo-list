import React from 'react';
import PropTypes from "prop-types";
import { Select, Input } from "../Form.styled";
import { FilterContainer, Form, ButtonEmptySearchInput } from './Filter.styled';
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";


function Filter(props) {

    const prefixKey = "filterBy";
    const filterSortBy = [
            [0,"Sort By"],
            [1,"Low"],
            [3,"High"]
    ];

    const onHandleSortBy = (e) => {
        props.onHandleFilterChange("filter_sort_by", parseInt(e.target.value));
    }

    const onHandleSearchBy = (e) => {
        props.onHandleFilterChange("filter_search_by", e.target.value);
    }

    return (
        <FilterContainer>
            <Form>
                <div>
                    <AiOutlineCaretDown/>
                    <Select 
                        value={ props.filterSortBy } 
                        onChange={ onHandleSortBy }
                        width="164px">
                        {
                            filterSortBy.map((value, index) => {
                                return <option key={ prefixKey.concat(index) } value={ value[0] }>{ value[1] }</option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    {
                        props.filterSearchBy.length > 0 ?
                            <ButtonEmptySearchInput
                                onClick={ (e) => { props.onHandleFilterChange("filter_search_by", ""); e.preventDefault(); } }
                                type="button">
                                <AiOutlineClose />
                            </ButtonEmptySearchInput>
                            :
                            null
                    }
                    <Input 
                        type="text" 
                        name="search" 
                        placeholder="Search by title" 
                        maxLength="100"
                        value={ props.filterSearchBy }
                        onChange={ onHandleSearchBy }
                        ></Input>
                </div>
            </Form>
        </FilterContainer>
    )
}

Filter.propTypes = {
    filterSortBy: PropTypes.number,
    filterSearchBy: PropTypes.string,
    onHandleFilterChange: PropTypes.func,
}

export default Filter;
