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
                {/* <select id="select-category" onChange={changeCategory}>
                    <option value="none">Select a product category</option>
                    <option value="pod-system">Pod System</option>
                    <option value="cartridges">Cartridges</option>
                    <option value="disposables">Disposables</option>
                    <option value="batteries">Batteries</option>
                </select> */}
                <Box sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={"pod-system"}>Pod System</MenuItem>
                            <MenuItem value={"cartridge"}>Cartridge</MenuItem>
                            <MenuItem value={"disposable"}>Disposable</MenuItem>
                            <MenuItem value={"battery"}>Battery</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}