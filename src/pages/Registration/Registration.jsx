import React from 'react';

const Registration = () => {
    
    return (
        <div className='container'>
            <form>
                <input className='' type="text" name="Drop Your Name Here" />
                <input className='' type="email" name="email" id="" placeholder='Input A Valid Email' />
                <input className='' type="password" name="password" id="" placeholder='Set new password' />
            </form>
        </div>
    );
};

export default Registration;