import React from 'react';

const wrappedComponent = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default wrappedComponent;