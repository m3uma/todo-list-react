import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {hideDone ? "Show" : "Hide"} done
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Complete all
            </button>
        </div>
    )
);

export default Buttons;