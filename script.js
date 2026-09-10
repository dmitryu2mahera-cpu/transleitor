
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const translateBtn = document.querySelector('#translateBtn');

async function translateText() {
    const text = input.value.trim();
   const safeText = encodeURIComponent(text);
   const response = await fetch(`https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en`);
   const data = await response.json();
   console.log(data);
   output.textContent = data.responseData.translatedText;
}

translateBtn.addEventListener('click', translateText);