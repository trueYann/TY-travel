<<<<<<< HEAD
import React from 'react'
import { Layout, Typography } from 'antd'
import { useTranslation, withTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
	const { t } = useTranslation()
	return (
		<Layout.Footer>
			<Typography.Title level={3} style={{ textAlign: 'center' }}>
				{t('footer.detail')}
			</Typography.Title>
		</Layout.Footer>
	)
}
=======
import React from "react";
import { Layout, Typography } from "antd";
import { useTranslation, withTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  );
};
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
