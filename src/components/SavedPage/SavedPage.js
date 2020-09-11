import React from 'react';
import GrowingContext from '../../context';
import EachCard from '../results/EachCard';
import KeyboardKey from '../KeyboardKey';

class SavedPage extends React.Component {
    static contextType = GrowingContext;

    render() {
        return (
            <main className="inner-main">
                <section id="page-header">
                    <KeyboardKey />
                    <h3 className="title-text">S A V E D</h3>
                    <main className="main-body">
                        {!this.context.saved ? (
                            <p id="nothing-saved">
                                You haven't saved anything yet...try searching first
                            </p>
                        ) : (
                            <div className="wrapper">
                                {this.context.saved.map((item, index) => {
                                    return <EachCard key={item.id} {...item} saved={true}/>;
                                })}
                            </div>
                        )}
                    </main>
                </section>
            </main>
        );
    }
}

export default SavedPage;
