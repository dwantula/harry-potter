import {FC, ReactNode} from 'react';

import {Content, PageContainer} from './Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => (
    <PageContainer>
        <Content>{children}</Content>
    </PageContainer>
);

export default Layout;
