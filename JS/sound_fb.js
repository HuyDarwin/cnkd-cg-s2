import { getDatabase, ref, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Get data
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.sound_intro == 1){
				con.PlaySound('Sounds/Intro.mp3',1);
				update(ref(db, 'commands'), { sound_intro : 0 });
			}
			if (data.sound_he == 1){
				con.PlaySound('Sounds/Host Entrance.mp3',2);
				update(ref(db, 'commands'), { sound_he : 0 });
			}
			
			if (data.sound_1m == 1){
				con.PlaySound('Sounds/1 Triệu CG.wav',2);
				update(ref(db, 'commands'), { sound_1m : 0 });
			}
			if (data.sound_br == 1){
				con.PlaySound('Sounds/Bankrupt.wav',2);
				update(ref(db, 'commands'), { sound_br : 0 });
			}
			if (data.sound_ch == 1){
				con.PlaySound('Sounds/Cơ Hội.wav',2);
				update(ref(db, 'commands'), { sound_ch : 0 });
			}
			if (data.sound_jack == 1){
				con.PlaySound('Sounds/Độc Đắc.wav',2);
				update(ref(db, 'commands'), { sound_jack : 0 });
			}
			if (data.sound_dd == 1){
				con.PlaySound('Sounds/Đổi Điểm.wav',2);
				update(ref(db, 'commands'), { sound_dd : 0 });
			}
		})
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});