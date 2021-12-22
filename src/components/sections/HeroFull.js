import React from 'react';
import { PopupButton } from '@typeform/embed-react'
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Input from "../elements/Input";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

  state = {
    quoteModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ quoteModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ quoteModalActive: false });
  }

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <Modal
          id="quote-modal"
          show={this.state.quoteModalActive}
          handleClose={this.closeModal}
        >
          <div className="center-content">
            <h3 className="mt-0 mb-12">We'll get in touch!</h3>
            <p className="text-sm">
              Give us your email and we'll get in touch immediately!
            </p>
          </div>
          <div>
            <Input
              type="email"
              label="This is a label"
              placeholder="Your best email.."
              formGroup="desktop"
              labelHidden>
              <Button color="primary">Subscribe</Button>
            </Input>
          </div>
        </Modal>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Artificial Intelligence at your Fingertips
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  We develop top of the line monitoring and security
                  artificial intelligence solutions for all your business operations and HR needs.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button
                    data-tf-iframe-props="title=Registration Form"
                  >
                    Get a Quote
                    <script src="//embed.typeform.com/next/embed.js"></script>
                  </Button>
                  <PopupButton
                    id="KpB6Y9FY"
                    style={{ fontSize: 20 }}
                    className="my-button" >
                    click to open form in popup
                  </PopupButton>
                </div>
              </div>
            </div>
            <div className="hero-figure illustration-element-01 reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/hero-image.png')}
                alt="Hero"
                width={896}
                height={504} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;