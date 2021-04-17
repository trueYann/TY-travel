<<<<<<< HEAD
import React, { Fragment } from 'react'
import { FilterTag } from './FilterTag'
import { Typography, Divider } from 'antd'
const { Text } = Typography

interface PropsType {
	title: string
	tags: string[]
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
	return (
		<div>
			<Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
				{title} :{' '}
			</Text>
			{tags.map((t, index) => {
				if (index === tags.length - 1)
					return <FilterTag key={`filter${index}`}>{t}</FilterTag>
				return (
					<span key={`filter${index}`}>
						<FilterTag>{t}</FilterTag>
						<Divider type='vertical' />
					</span>
				)
			})}
		</div>
	)
}
=======
import React, { Fragment } from "react";
import { FilterTag } from "./FilterTag";
import { Typography, Divider } from "antd";
const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title} :{" "}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1)
          return <FilterTag key={`filter${index}`}>{t}</FilterTag>;
        return (
          <span key={`filter${index}`}>
            <FilterTag>{t}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
