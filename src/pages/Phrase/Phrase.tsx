import {Button, Modal} from "antd";
import React, {useEffect, useState} from 'react';
import {ReactComponent as Happy} from "../../assets/happy.svg";
import {ReactComponent as Sad} from "../../assets/sad.svg";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IWord} from "../../models/IWord";
import {getShuffled} from "../../utils/utils";


const phrases = [
    {"id": 9, "rus": "Не беспокойтесь", "tat": "Борчылмагыз"}, {
        "id": 29,
        "rus": "Эти туристы из Америки",
        "tat": "Бу туристлар Америкадан"
    }, {"id": 22, "rus": "А кто вы", "tat": "Ә сез кем"}, {"id": 16, "rus": "Пожалуйста", "tat": "Зинһар"}, {
        "id": 10,
        "rus": "Давай",
        "tat": "Әйдә"
    }, {"id": 19, "rus": "Извините", "tat": "Гафу итегез"}, {
        "id": 5,
        "rus": "Добрый день",
        "tat": "Хәерле көн"
    }, {"id": 15, "rus": "Пока", "tat": "Хуш"}, {"id": 24, "rus": "Здравствуй(те)", "tat": "Исәнме"}, {
        "id": 25,
        "rus": "Можешь прийти",
        "tat": "Килә аласыңмы"
    }, {"id": 8, "rus": "Короче", "tat": "Кыскасы"}, {"id": 7, "rus": "По-моему", "tat": "Минемчә"}, {
        "id": 20,
        "rus": "Куда пойдём",
        "tat": "Кая барабыз"
    }, {"id": 3, "rus": "Привет", "tat": "Сәлам"}, {
        "id": 13,
        "rus": "Что ты делаешь",
        "tat": "Син нишлисең"
    }, {"id": 23, "rus": "Это так", "tat": "Шулаймы"}, {"id": 1, "rus": "Несомненно", "tat": "Һичшиксез"}, {
        "id": 28,
        "rus": "Я устал(а)",
        "tat": "Арыдым"
    }, {"id": 2, "rus": "Ничего не стоит", "tat": "Берни түгел"}, {
        "id": 33,
        "rus": "Большое спасибо",
        "tat": "Бик зур рәхмәт"
    }, {"id": 32, "rus": "Это папа Азата", "tat": "Бу Азатның әтисе"}, {
        "id": 17,
        "rus": "Кто это",
        "tat": "Бу кем"
    }, {"id": 37, "rus": "Что это", "tat": "Бу нәрсә"}, {"id": 14, "rus": "До свидания", "tat": "Сау булыгыз"}, {
        "id": 11,
        "rus": "Конечно, разумеется",
        "tat": "Әлбәттә"
    }, {"id": 40, "rus": "Давай покушаем", "tat": "Әйдә ашыйбыз"}, {
        "id": 41,
        "rus": "Давай пошли",
        "tat": "Әйдә киттек"
    }, {"id": 30, "rus": "Добрый вечер", "tat": "Хәерле кич"}, {
        "id": 43,
        "rus": "Мне нужен апельсин",
        "tat": "Миңа апельсин кирәк"
    }, {"id": 39, "rus": "Где мой телефон", "tat": "Минем телефон кайда"}, {
        "id": 36,
        "rus": "Я говорю по-татарски",
        "tat": "Мин татарча сөйләшәм"
    }, {"id": 45, "rus": "Спасибо", "tat": "Рәхмәт"}, {"id": 44, "rus": "Татарский язык", "tat": "Татар теле"}, {
        "id": 35,
        "rus": "Как дела",
        "tat": "Хәлләрең ничек"
    }, {"id": 21, "rus": "Что сейчас будем делать", "tat": "Хәзер нишлик"}, {
        "id": 27,
        "rus": "Нет настроения",
        "tat": "Кәефем юк"
    }, {"id": 38, "rus": "Красивая девочка", "tat": "Матур кыз"}, {
        "id": 26,
        "rus": "Я очень рад",
        "tat": "Мин бик шат"
    }, {"id": 31, "rus": "Меня зовут Алсу", "tat": "Минем исемем Алсу"}, {
        "id": 18,
        "rus": "Как дела",
        "tat": "Ни хәл"
    }, {"id": 42, "rus": "Добро пожаловать", "tat": "Рәхим итегез"}, {
        "id": 6,
        "rus": "Передавай привет",
        "tat": "Сәлам әйт"
    }, {"id": 34, "rus": "Вам тоже спасибо", "tat": "Сезгә дә рәхмәт"}, {
        "id": 12,
        "rus": "Где ты(вы)",
        "tat": "Син кайда"
    }]

const Phrase = () => {
    const {fetchWords} = useActions();
    const [list, setList] = useState<IWord[]>([])
    const [correct, setCorrect] = useState<IWord | undefined>(undefined)
    const [clicked, setClicked] = useState<IWord | undefined>(undefined)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (phrases.length > 0) {
            const tempList = getShuffled(phrases).slice(0, 4)
            setList(tempList)
            setCorrect(getShuffled(tempList)[0])
        } else {
            fetchWords()
        }

    }, [phrases])


    const closeModal = () => {
        setClicked(undefined)
        const tempList = getShuffled(phrases).slice(0, 4)
        setList(tempList)
        setCorrect(getShuffled(tempList)[0])
        setIsOpen(false);
    }

    const handleClick = (id: number) => {
        setClicked(list.find(x => x.id === id))
        setIsOpen(true);
    }

    return (
        <>
            <h1>{correct?.tat}</h1>
            <audio src={`https://innostudy.ru/audio/phrases/${correct?.tat.toLowerCase()}.mp3`} controls>
                Your browser does not support the audio element.
            </audio>
            <div style={{marginTop: 16, display: 'flex', flexDirection: 'column'}}>
                {list.map(({id, tat, rus}) =>
                    <Button
                        key={id} style={{
                        marginBottom: 16
                    }}
                        type="primary" shape="round" size={"large"}
                        onClick={() => handleClick(id)}>{rus}</Button>
                )}
            </div>
            <Modal
                visible={modalIsOpen}
                onCancel={closeModal}
                onOk={closeModal}
                footer={null}
                closable={false}
            >
                {correct?.id === clicked?.id ? <Happy style={{width: 90, height: 90}}/> :
                    <Sad style={{width: 90, height: 90}}/>}
                <h3>{correct?.id === clicked?.id ? 'Верно' : 'Неверно'}</h3>
                <Button
                    type={'primary'}
                    size={'large'}
                    onClick={closeModal}>Далее</Button>
            </Modal>
        </>
    );
};

export default Phrase;
