import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import Markdown from 'react-markdown'
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { BlogSmallCard } from '../components/BlogSmallCard';

const articleMD = `
# Understanding Islam: A Comprehensive Overview

Islam is one of the world's major religions, with over 1.8 billion followers, known as Muslims, globally. It is a monotheistic faith, centered around the belief in one God, Allah, and follows the teachings of the Prophet Muhammad (peace be upon him).

## The Core Beliefs of Islam

### 1. **Tawhid (Oneness of God)**
At the heart of Islam is the concept of Tawhid, the belief in the absolute oneness of Allah. Muslims believe that Allah is the singular, unique, and all-powerful creator and sustainer of the universe.

### 2. **Prophethood**
Muslims believe in a long line of prophets who were sent by Allah to guide humanity. This line includes figures such as Adam, Noah, Abraham, Moses, Jesus, and Muhammad (peace be upon them all). Muhammad is considered the last and final prophet, and his teachings are seen as the completion of Allah's guidance to humanity.

### 3. **Revelation**
Islamic teachings are derived from two primary sources: the Qur'an and the Sunnah. The Qur'an is the holy book of Islam, believed to be the literal word of Allah as revealed to Muhammad. The Sunnah consists of the practices, sayings, and actions of Muhammad, which serve as a guide for living a righteous life.

### 4. **Afterlife**
Muslims believe in an afterlife where individuals are held accountable for their actions on Earth. This belief in accountability and divine judgment underscores the moral and ethical dimensions of Islamic teachings.

## The Five Pillars of Islam

The practice of Islam is built upon five fundamental acts known as the Five Pillars, which provide a framework for a Muslim's faith and actions.

### 1. **Shahada (Faith)**
The declaration of faith, stating that "There is no god but Allah, and Muhammad is His messenger," is the foundational creed of Islam.

### 2. **Salah (Prayer)**
Muslims are required to perform five daily prayers facing the Kaaba in Mecca. These prayers occur at dawn, noon, mid-afternoon, sunset, and evening.

### 3. **Zakat (Charity)**
Muslims are obligated to give a portion of their wealth to those in need, typically calculated as 2.5% of their savings. This act of charity purifies wealth and fosters social equality.

### 4. **Sawm (Fasting)**
During the month of Ramadan, Muslims fast from dawn until sunset, abstaining from food, drink, and other physical needs. This practice teaches self-discipline, self-control, and empathy for the less fortunate.

### 5. **Hajj (Pilgrimage)**
Muslims who are physically and financially able must undertake the pilgrimage to Mecca at least once in their lifetime. The Hajj occurs annually during the Islamic month of Dhu al-Hijjah.

## The Diversity of the Muslim World

Islam is not monolithic; it is practiced by diverse communities around the world. While the core beliefs and practices are consistent, cultural and regional differences shape how Islam is expressed and lived. For example, the customs of Muslims in Indonesia, the largest Muslim-majority country, differ from those in Saudi Arabia, Egypt, or Turkey.

## Common Misconceptions About Islam

### 1. **Islam and Violence**
A prevalent misconception is that Islam promotes violence. In reality, the vast majority of Muslims are peaceful and abhor violence. The Qur'an advocates for peace and compassion, and the misuse of Islamic teachings by extremists is widely condemned by Muslims.

### 2. **Women's Rights in Islam**
Another misconception is that Islam oppresses women. While there are issues related to women's rights in some Muslim-majority countries, these often stem from cultural practices rather than Islamic teachings. The Qur'an and the Prophet Muhammad emphasized the dignity, respect, and rights of women.

### 3. **Islam and Modernity**
Some believe that Islam is incompatible with modernity. However, throughout history, Muslim scholars and scientists have significantly contributed to various fields such as medicine, mathematics, and astronomy. Today, many Muslims continue to engage with and contribute to modern science, technology, and arts.

## Conclusion

Islam is a rich and diverse faith with deep spiritual, ethical, and social dimensions. Understanding its core beliefs, practices, and the diversity within the Muslim world can foster greater appreciation and respect for this global faith. By dispelling misconceptions and focusing on the universal values of peace, compassion, and justice that Islam promotes, we can build bridges of understanding and coexistence.

---

*Note: This blog aims to provide a general overview of Islam and is not exhaustive. For further study, consider exploring the works of scholars and engaging with Muslim communities directly.*

`

export const SingleArticle = () => {
    return (
        <div>
            <NavBar />
            <div className="p-16 w-full max-w-screen-lg mx-auto">
                <div className="h-96 w-full rounded-lg mb-8">
                    <img className='h-96 w-full rounded-lg object-cover' src="https://i.ibb.co/PtzFG5n/image.png" alt="" />
                </div>
                <div className="flex text-center items-center w-full flex-col gap-8">
                    <div className="text-5xl font-medium">The History Of Web Design</div>
                    <div className="flex items-center gap-2">
                        <img
                            className='h-8 w-8 rounded-full object-cover'
                            src="https://assets-global.website-files.com/661e9add3880f66f129971db/661ee2d2c6028be4f49905d6_avatar.png"
                            alt=""
                        />
                        <div className='text-gray-600'>Post by: </div>
                        <Link to="">Chris Martin</Link>
                    </div>
                    <div className="text-gray-600">March 27, 2025</div>
                </div>

                <div className='prose mx-auto mt-12'>
                    <Markdown>{articleMD}</Markdown>
                </div>

                <div className="w-full flex justify-between mt-16 mb-5">
                    <div className="text-xl font-medium">Recent Posts</div>
                    <button className="btn flex gap-2 items-center text-gray-600 hover:text-black">
                        View All
                        <ChevronRightIcon className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    {[...Array(14)].map((_, i) => (
                        <BlogSmallCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};
