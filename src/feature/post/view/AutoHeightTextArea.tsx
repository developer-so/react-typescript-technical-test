import { useEffect } from 'react';

export default function AutoHeightTextarea(props: any) {
    useEffect(() => {
        const textarea = document.querySelector('#hs-autoheight-textarea') as HTMLTextAreaElement;

        textarea.addEventListener('input', () => {
            textareaAutoHeight(textarea, 3);
        });

        textareaAutoHeight(textarea, 3);

        function textareaAutoHeight(el: HTMLTextAreaElement, offsetTop = 0) {

            el.style.height = 'auto';
            el.style.height = `${el.scrollHeight + offsetTop}px`;
        }
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.setContent(e.target.value);

    return (
        <textarea
            id="hs-autoheight-textarea"
            className="resize-none py-3 focus:outline-none w-full text-xl text-[#0f1419] placeholder-[#536471] disabled:text-gray-300"
            placeholder="What is happening?!"
            onChange={onChange}>
            {props.value}
        </textarea>
    );
}
