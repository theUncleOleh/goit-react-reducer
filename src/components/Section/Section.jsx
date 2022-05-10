import s from './Section.module.css';

import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
