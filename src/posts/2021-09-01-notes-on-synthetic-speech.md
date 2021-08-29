---
title: "Notes on synthetic speech"
date: "2021-09-01"
tags: ["Screen readers", "Voice"]
categories: "Web life"
---

I've been thinking about conver	sational interfaces for some time, and about the importance of voice quality as a part of user experience. 

I use a screen reader and it sounds the same, whatever I'm doing - reading an email from a friend, reading news of a global disaster, reading something in the first-person female or first-person transgender, shopping for clothes or scrutinising a business contract. Although the quality of voices used by screen readers is OK, you're never in any doubt that you're listening to synthetic speech - and believe me, it's boring!

It's worse than that though. I've been using the same screen reader with the same voice for about 20 years. The quality of synthetic speech has improved considerably over that time, so you might well ask why I choose to listen to a voice that has its origins in the 1980s.

The reason is not vocal quality; it's performance. Like other screen reader users, I've grown used to listening at relatively high speed - something like 520 Words Per Minute (WPM), as opposed to the roughly 150 WPM of conversational English.

Like GPS navigation systems, automated phone menus, and voice assistants, screen readers use Text To Speech (TTS) engines to create the voice you hear. Each TTS engine comes with a different set of voices, and some screen readers let you switch TTS engines so you can choose a voice you prefer.

Different types of TTS have emerged over the years, and each has its advantages and disadvantages. 

## Human speech

To understand the way different TTS engines work, it's helpful to know a bit about how human speech works.

Sound is created when a flow of air is interrupted. The interruption makes air particles vibrate so they bump into other air particles. Those other air particles also start to vibrate, and bump into yet more air particles. This keeps happening until the wave of vibration, or sound wave, runs out of energy.

When you speak, air is pushed out of your body by your diaphragm, ribs, and abdominal muscles. On the way out, the flow of air is interrupted by your vocal cords, which vibrate, creating a sound wave.

The number of times your vocal cords vibrate in a second determines the pitch of your voice. If your vocal cords vibrate 85 times a second, the flow of air is interrupted 85 times a second, which means the pitch of your voice is 85HZ. The higher the frequency of the vibrations, the higher the pitch of your voice.

Your vocal cords do not all vibrate at the same frequency. The lowest and strongest frequency is known as your fundamental pitch - the pitch you speak at. Harmonics are vibrations that happen at the same time, but at a higher and weaker frequency.

Sounds that have a low pitch are louder than those with a higher pitch, so if your vocal cords were the only part of you involved in making yourself heard, your harmonics would not be heard over your fundamental pitch.

Your body solves this problem by amplifying the volume of the sound in resonating chambers. Each chamber contains air that will vibrate at a frequency determined by the size of the chamber, the smaller the chamber, the higher the pitch.

The sound wave you generated passes through your resonating chambers. If one of them has a size and shape that means it has a vibration frequency that's the same as either your fundamental pitch or one of the harmonics, the air inside the chamber starts to vibrate at the same frequency - amplifying the sound.

You can change the size and shape of your resonating chambers using things like your diaphragm, tongue, soft palette, jaw, and lips; and in so doing you control the pitch (frequency) and volume (amplitude) of the sound that emerges from each chamber. These chambers typically resonate at between three and five frequencies, known as formants.

## Synthetic speech

### Formant TTS

Formant TTS creates artificial sounds based on a set of rules that mimic the basic characteristics of human speech (like frequency and amplitude). It needs little processor power, making it a good choice for devices with little or unknown computational capability - like computers running screen readers in the 1990s.

The fact that formant TTS is entirely artificial means it's flexible enough to convert any text into synthetic speech, but the rules for generating different voices are limited. For example, a female voice is typically created by nothing more sophisticated than doubling the pitch of a male voice.

Speech generated using formant TTS has few audio glitches, so it's intelligible even at faster speeds, but it's every bit as artificial as the TTS itself, sounding robotic, monotone, and utterly devoid of expression.

My usual Windows screen reader is Jaws, which uses the Eloquence ETI TTS by default. There are eight voices available; Reed, Shelly, Bobby, Rocko, Glen, Sandy, Grandma and Grandpa.

<audio src="../media/2021/Eloquence-TTS-voices.mp3" controls></audio>

### Concatenative TTS

To overcome the artificial sound of formant TTS, concatenative TTS uses recordings of human speech, stored in a database in chunks of different sizes like phones and syllables. 

Speech is synthesized by searching the database for the recorded chunks that most closely match the features of the text to be spoken, then joining them together, or concatenating them, them to form coherent words and sentences. This takes quite a bit of processor power and the act of searching the database and sequencing the speech output takes time, so the result is generally slower and less responsive than formant TTS.

In theory, concatenative TTS preserves the human qualities of the original recordings, but in practice it isn't possible to record a large enough set of words, in enough combinations of speaking style, voices, or emotional expressions, to do so. The voice quality tends to be better than formant TTS, but it still lacks the variable characteristics of human speech, and often has a "mumbling" quality that makes it less crisp when listening at higher rates of WPM.

Concatenative TTS is a good choice in situations where the vocabulary is limited and the rate of speech is measured; like airport announcements or automated phone menus, but less good for screen readers that need to be able to read everything and anything.

### Parametric TTS

Parametric TTS was created to overcome the limitations of both formant and concatenative TTS. It uses recordings of human speech, but unlike concatenative TTS, it does not sequence chunks of sound to construct words and sentences. Instead, it describes the statistical characteristics of the recorded speech in a set of rules, or parameters. Those rules are then used to generate an artificial acoustic wave using a signal processor known as a vocoder.

By changing the parameters that are sent to the vocoder, parametric TTS can be used to create voices with more flexibility than concatenative TTS, and more nuance than formant TTS. Despite the ability to simulate voices of different genders, ages, and accents with reasonable accuracy, parametric TTS smooths out the sound, giving speech an oddly flat, monotone quality.

### Neural TTS

Like parametric TTS, neural TTS creates artificial wave forms, but it does so using a neural network that's been trained by an enormous amount of voice data.

Being trained on truly vast datasets means that neural TTS voices can sound remarkably human, even to the point that it can be hard to tell they're synthetic unless you know what you're listening for. It takes a lot of processor power to generate speech using a neural TTS though, so speech is generated in the cloud where computational "oomph" is plentiful.

This means that neural TTS is not yet an option for screen readers.

There are privacy safeguards that would need to exist for one thing. Imagine everything you read, everything you look at, and everything you write, being processed in the cloud, and I do mean *everything*. All your email; documents like your will, the naughty message you just sent someone, the groceries you bought this week, or a Non-Disclosure Agreement (NDA) you need to sign; people's personal information including you're own; and a thousand other things that you happen to look at over the course of time.

There are performance issues for another thing. Although the generation of speech using a neural TTS is itself highly performant, network latency is another matter. Even on a high bandwidth connection, the time needed to make the round-trip to the cloud and back is not fast enough for even the most leisurely screen reader user to contend with.

Then there's the problem of network resilience and of having no network connection at all. A screen reader must work wherever the person using it happens to be, and that includes places where there is no connectivity, or where the connectivity is there but it's flaky and unreliable.

So here is my predicament:

I want to listen to my screen reader fast; really fast. It makes my teeth itch when I must listen at fewer WPM. If you have a home assistant, make it speak two or three times more slowly than usual, and you'll see what I mean.

I'd also like to listen to a voice that sounds almost, if not yet entirely quite like, a proper human. One that can put a bit of expression into the things I listen to, even if it's still a bit limited.

But until neural TTS engines can be run locally, I'm taking performance over voice quality because I have work to do, emails to send, contracts to sign, and maybe even the occasional naughty message to send someone, and I don't want to hang about!