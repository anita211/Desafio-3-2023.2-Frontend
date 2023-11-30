
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import { v4 } from 'uuid';
import './App.css';

import Icon from './assets/icon.png';
import Icon1 from './assets/icon1.png';
import Icon2 from './assets/icon2.png';
import Icon3 from './assets/icon3.png';

import Calendar from './assets/calendario.png';
import Cancel from './assets/cancel.png';
import Check from './assets/check.png';
import Plus from './assets/plus.png';

function App() {
  
  const [state, setState] = useState({
    todo: {
      title: 'A Fazer',
      items: [],
    },
    inProgress: {
      title: 'Fazendo',
      items: [],
    },
    done: {
      title: 'Feito',
      items: [],
    },
  });

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(null);

  const handleSubmit = (e, key) => {
    e.preventDefault();
    setState((prev) => {
      return {
        ...prev,
        [key]: {
          title: prev[key].title,
          items: [
            ...prev[key].items,
            {
              id: v4(),
              name: taskTitle,
              avatar: <img src={getRandomIconPath()} className="icon" />,
              author: author,
              cal: <img src={Calendar} className="icon" />,
              date: date,
              description: description,
            },
          ],
        },
      };
    });
    setTaskTitle('');
    setDescription('');
    setAuthor('');
    setDate('');
    setIsFormVisible(null);
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
      return prev;
    });
  }

  const formatToDayMonthYear = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  const iconPaths = [Icon, Icon1, Icon2, Icon3];

  const getRandomIconPath = () => {
    return iconPaths[Math.floor(Math.random() * iconPaths.length)];
  }
  
  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return (
            <div key={key} className={`column ${key === 'done' ? 'last-column' : ''}`}>
              <h3>{data.title}</h3>
              <hr className="title-divider" />
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={'droppable-col'}
                    >
                      {data.items.map((el, index) => {
                        return (
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided,snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`item ${snapshot.isDragging ? "dragging" : ""}`}
                                >
                                  <div className="task-title">{el.name}</div>
                                  <hr className="horizontal-divider"/>
                                  <div className="task-details">
                                    <div className='container-left'>
                                      <div className='line'> 
                                        <div className="task-icon">{el.avatar}</div>
                                        <div className="task-author">{el.author}</div>
                                      </div>
                                      <div className='line'>
                                        <div className="task-icon">{el.cal}</div>
                                        <div className="task-date">{el.date}</div>
                                      </div>
                                    </div>
                                    <hr className="vertical-divider"/>
                                    <div className="task-description">{el.description}</div>
                                  </div>
                                </div>
                                  )}}
                          </Draggable>
                        );
                      })}
                      <div>
                        <button className="btn" onClick={() => setIsFormVisible(key)}>
                          <img src={Plus} className="plus" />
                        </button>
                        {isFormVisible===key && (
                          <form className="item" onSubmit={(e) => handleSubmit(e, key)}>
                            <input
                              type="text"
                              value={taskTitle}
                              onChange={(e) => setTaskTitle(e.target.value)}
                              placeholder="Título da tarefa"
                              className='new-task-title'
                            />
                            <hr className="horizontal-divider"/>
                            <div className="task-details">
                              <div className='container-left'>
                                <div className='new-line'> 
                                  <div className="task-icon">
                                    {<img src={Icon} className="icon"/>}
                                  </div>
                                  <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Responsável"
                                    className='new-author'
                                  />
                                </div>
                                <div className='new-line'>
                                  <div className="task-icon">{<img src={Calendar} className="icon"/>}</div>
                                  <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    onBlur={(e) => setDate(formatToDayMonthYear(e.target.value))}
                                    placeholder="dd/mm/YYYY"
                                    className='new-task-date'
                                  />
                                </div>
                              </div>
                              <hr className="new-vertical-divider"/>
                              <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descrição"
                                className='new-task-description'
                              />
                            </div>
                            <div className="new-task-buttons">
                              <button className='btn-submit' type="submit">
                                <img src={Check} className="check" />
                              </button>
                              <button className='btn-submit' onClick={() => setIsFormVisible(null)}>
                                <img src={Cancel} className="cancel" />
                              </button>
                            </div>
                            
                          </form>
                        )}
                      </div>
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  )
}

export default App;
