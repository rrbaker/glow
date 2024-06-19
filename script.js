async function fetchWritingPrompt() {
	const url = "https://api.perplexity.ai/chat/completions";
	const headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${PERPLEXITY_API_KEY}`, // Replace with your actual API key
	};
	const body = {
		model: "pplx-7b-online",
		stream: false,
		max_tokens: 1024,
		frequency_penalty: 1,
		temperature: 0.0,
		messages: [
			{ role: "system", content: "Provide a creative writing prompt." },
		],
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body),
		});
		const data = await response.json();
		document.getElementById("prompt").innerText =
			data.choices[0].message.content;
	} catch (error) {
		console.error("Error fetching writing prompt:", error);
	}
}

fetchWritingPrompt();
