<<<<<<< HEAD
import React, { useState } from 'react'
import { Tag } from 'antd'
const { CheckableTag } = Tag

interface PropsType {
	onSelect?: () => void
}

export const FilterTag: React.FC<PropsType> = (props) => {
	const [checked, setChecked] = useState(false)

	const handleChange = (checked) => {
		setChecked(checked)
	}

	return <CheckableTag {...props} checked={checked} onChange={handleChange} />
}
=======
import React, { useState } from "react";
import { Tag } from "antd";
const { CheckableTag } = Tag;

interface PropsType {
  onSelect?: () => void;
}

export const FilterTag: React.FC<PropsType> = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return <CheckableTag {...props} checked={checked} onChange={handleChange} />;
};
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
