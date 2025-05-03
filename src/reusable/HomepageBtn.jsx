import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/HomepageBtn.module.css';

const HomepageBtn = ({ destiny, buttonText }) => {
	const navigate = useNavigate();
	return (
		<button className={styles.HomepageBtn} onClick={() => navigate(destiny)}>
			{buttonText}
		</button>
	);
};

export default HomepageBtn;
