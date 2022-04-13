/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:11:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-12 00:56:26
 * @FilePath: /custom-vapes-app/pages/components/StepOne.js
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StepOne(props) {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        props.category(event.target.value);
    };

    return (
        <div>
            <h3>Customize Your Vaping Hardware</h3>
            <p>We offer a variety of custom vape cartridges, vape pen batteries, disposable vape pens, and many packaging
                choices to go with them! We pride ourselves as a reliable and reputable company providing a high level of
                service to our industry. Start to custom your products now!</p>
            <p className="cms-br">&nbsp;</p>
            <div id="custom-step1">
                <h5>Step 1: Select a Product Category</h5>
                <p>Instruction here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
                    pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                <Box sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={"podSystems"}>Pod System</MenuItem>
                            <MenuItem value={"cartridges"}>Cartridge</MenuItem>
                            <MenuItem value={"disposables"}>Disposable</MenuItem>
                            <MenuItem value={"batteries"}>Battery</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <p className="cms-br">&nbsp;</p>
        </div>
    )
}