import { Col, Image } from 'react-bootstrap';
import Section from '../../layout/Section';
import classes from './ComingSoon.module.css';
import _404img from '../../assets/w3b_lab_logo_no_name.png';
import { Trans } from '@lingui/macro';

const ComingSoonPage = () => {
  return (
    <Section fullWidth={false}>
      <Col lg={4}>
        <Image src={_404img} fluid />
      </Col>
      <Col lg={8}>
        <h1 className={classes.heading}>
          <Trans>Coming Soon: This page does not currently exist but will be implemented soon.</Trans>
        </h1>
      </Col>
    </Section>
  );
};
export default ComingSoonPage;
