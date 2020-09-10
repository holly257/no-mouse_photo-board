import React from 'react';
import EachCard from '../results/EachCard';

class SavedPage extends React.Component {
    render() {
        if (!this.props) {
            return <p>You haven't saved anything yet...try searching first</p>;
        }
        return (
            <main className="inner-main">
                <section id="page-header">
                    <h3 className="title-text">S A V E D</h3>
                    <main className="main-body">
                        <div className="wrapper">
                            {this.props.images.map((item, index) => {
                                return <EachCard key={item.id} {...item} />;
                            })}
                        </div>
                    </main>
                </section>
            </main>
        );
    }
}

export default SavedPage;
