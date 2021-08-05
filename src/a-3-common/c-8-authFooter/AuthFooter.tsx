import React from 'react'
import {Col, Row} from 'antd'
import {StyledNavLink, StyledParagraph} from '../../a-2-features/f-1-auth/a-1-login/l-1-ui/u-1-login/LoginPage'

type AuthFooterPropsType = {
    paragraph: string
    linkText: string
    link: string
}

export const AuthFooter: React.FC<AuthFooterPropsType> = ({paragraph, linkText, link}) => {
    return (
        <>
            <Row justify={'center'}>
                <Col>
                    <StyledParagraph>{paragraph}</StyledParagraph>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <StyledNavLink fontWeight={600} fontSize={16} to={link}>{linkText}</StyledNavLink>
                </Col>
            </Row>
        </>
    )
}