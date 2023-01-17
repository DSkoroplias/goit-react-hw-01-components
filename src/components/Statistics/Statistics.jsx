import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {elements}
        <ul className={styles.stat_list}></ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
