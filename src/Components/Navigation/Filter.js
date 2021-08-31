import React from 'react';
import { Select, Input } from "../Form.styled";
import { FilterContainer, Form } from './Filter.styled';
import { AiOutlineCaretDown } from "react-icons/ai";



export default function Filter() {

    const prefixKey = "filterBy";
    const filterSortBy = ["Sort By", "Low", "High"];

    return (
        <FilterContainer>
            <Form>
                <div>
                    <AiOutlineCaretDown/>
                    <Select 
                        width="164px">
                        {
                            filterSortBy.map((value, index) => {
                                return <option key={ prefixKey.concat(index) }>{ value }</option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <Input 
                        type="text" 
                        name="search" 
                        placeholder="Search by title" 
                        maxLength="100"></Input>
                </div>
            </Form>
        </FilterContainer>
    )
}
