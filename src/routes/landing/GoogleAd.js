import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GoogleAd.css'

class GoogleAd extends React.Component<IGoogleAd> {
  render() {
    return (
      <div className={this.props.className}>
        <li className={`${s.LI_1}`}>
          <div className={s.DIV_2}>
            <a href="https://www.xfinity.com/learn/xfinity-internetplus-ned-nn" className={s.A_4} />
            <h3 className={s.H3_5}>
              Xfinity® High Speed Internet | Limited Offer - $29.99/mo/1yr | xfinity.com‎
            </h3><br className={s.BR_6} />
            <div className={s.DIV_7}>
              <span className={s.SPAN_8}>Ad</span><cite className={s.CITE_9}>www.xfinity.com/Internet</cite>‎
            </div>
            <div className={s.DIV_13}>
            </div>
            <div className={s.DIV_14}>
              <span className={s.SPAN_15}></span>
            </div>
          </div>
          <div className={s.DIV_16}>
            Get <b className={s.B_17}>Internet</b> Speeds You Want At A Price You'll Love. Sign Up With Xfinity Today! Fast <b className={s.B_18}>internet</b>. Norton™ security included. Millions of hotspots. Move service stress-free. Advanced security. Services: <b className={s.B_19}>Internet</b>, TV, Phone, WIFI Hotspots, X1 Entertainment System, Sports Packages.
          </div>
        </li>
      </div>
    )
  }
}

export default withStyles(s)(GoogleAd)
