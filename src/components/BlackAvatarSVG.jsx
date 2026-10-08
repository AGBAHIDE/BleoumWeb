import React from 'react';

// Avatars vectoriels modernes et expressifs représentant des personnes noires
export const BlackAvatarSVG = ({ id, size = 62 }) => {
  switch (id) {
    case 1:
      // Aminata Touré : Femme noire élégante avec coiffure nattée soignée et créoles dorées
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#FEF3C7" />
          {/* Tresses / Chignon arrière */}
          <circle cx="50" cy="28" r="22" fill="#1A110C" />
          <path d="M26 40C26 24 36 14 50 14C64 14 74 24 74 40C74 44 72 50 72 50C72 50 66 32 50 32C34 32 28 50 28 50C28 50 26 44 26 40Z" fill="#241710" />
          {/* Cou et épaules */}
          <path d="M42 62V72C42 74 44 76 47 77H53C56 76 58 74 58 72V62H42Z" fill="#5E351E" />
          <path d="M24 100C24 84 34 78 50 78C66 78 76 84 76 100H24Z" fill="#C2410C" />
          <path d="M42 78L50 86L58 78H42Z" fill="#9A3412" />
          {/* Visage */}
          <ellipse cx="50" cy="50" rx="19" ry="21" fill="#6B3E26" />
          {/* Tresses latérales élégantes */}
          <path d="M31 38C30 45 32 54 34 58C35 52 35 44 36 38C34 37 32 37 31 38Z" fill="#1A110C" />
          <path d="M69 38C70 45 68 54 66 58C65 52 65 44 64 38C66 37 68 37 69 38Z" fill="#1A110C" />
          {/* Oreilles et boucles dorées */}
          <ellipse cx="31" cy="51" rx="3.5" ry="5.5" fill="#5E351E" />
          <ellipse cx="69" cy="51" rx="3.5" ry="5.5" fill="#5E351E" />
          <circle cx="30" cy="56" r="3.5" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <circle cx="70" cy="56" r="3.5" stroke="#F59E0B" strokeWidth="2" fill="none" />
          {/* Yeux */}
          <ellipse cx="43" cy="48" rx="2.8" ry="3.5" fill="#1A110C" />
          <ellipse cx="57" cy="48" rx="2.8" ry="3.5" fill="#1A110C" />
          <circle cx="44" cy="47" r="1" fill="#FFFFFF" />
          <circle cx="58" cy="47" r="1" fill="#FFFFFF" />
          {/* Sourcils fins */}
          <path d="M39 43C42 41 45 42 47 44" stroke="#1A110C" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M61 43C58 41 55 42 53 44" stroke="#1A110C" strokeWidth="1.8" strokeLinecap="round" />
          {/* Nez */}
          <path d="M50 49V54C48.5 54 48 55.5 50 56C52 55.5 51.5 54 50 54" stroke="#4D2A18" strokeWidth="1.6" strokeLinecap="round" />
          {/* Lèvres et Sourire */}
          <path d="M44 61C47 64 53 64 56 61" stroke="#9A4D35" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );

    case 2:
      // Jean-Marc Kouassi : Homme noir chic avec lunettes modernes et barbe soignée
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#E0F2FE" />
          {/* Cou et chemise */}
          <path d="M41 64V73C41 75 43 77 47 78H53C57 77 59 75 59 73V64H41Z" fill="#3D2214" />
          <path d="M22 100C22 84 32 78 50 78C68 78 78 84 78 100H22Z" fill="#1E3A8A" />
          {/* Col de chemise blanc */}
          <path d="M42 78L50 87L44 94L38 82L42 78Z" fill="#FFFFFF" />
          <path d="M58 78L50 87L56 94L62 82L58 78Z" fill="#E2E8F0" />
          {/* Cheveux dégradé */}
          <path d="M30 38C30 24 38 18 50 18C62 18 70 24 70 38C70 41 68 45 68 45H32C32 45 30 41 30 38Z" fill="#140D09" />
          {/* Visage */}
          <rect x="31" y="34" width="38" height="34" rx="17" fill="#4A2B18" />
          {/* Oreilles */}
          <ellipse cx="29" cy="50" rx="3.5" ry="5.5" fill="#3D2214" />
          <ellipse cx="71" cy="50" rx="3.5" ry="5.5" fill="#3D2214" />
          {/* Barbe soignée */}
          <path d="M33 52C33 66 40 70 50 70C60 70 67 66 67 52C67 56 64 66 50 66C36 66 33 56 33 52Z" fill="#140D09" />
          {/* Moustache */}
          <path d="M43 59C46 58 49 59 50 60C51 59 54 58 57 59C58 60 55 62 50 62C45 62 42 60 43 59Z" fill="#140D09" />
          {/* Lunettes modernes */}
          <rect x="36" y="43" width="11" height="9" rx="3" stroke="#0F172A" strokeWidth="2.4" fill="rgba(255,255,255,0.25)" />
          <rect x="53" y="43" width="11" height="9" rx="3" stroke="#0F172A" strokeWidth="2.4" fill="rgba(255,255,255,0.25)" />
          <path d="M47 47H53" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M33 46L36 47" stroke="#0F172A" strokeWidth="2" />
          <path d="M64 47L67 46" stroke="#0F172A" strokeWidth="2" />
          {/* Yeux derrière verres */}
          <circle cx="41.5" cy="47.5" r="2" fill="#140D09" />
          <circle cx="58.5" cy="47.5" r="2" fill="#140D09" />
          {/* Sourire */}
          <path d="M45 63C48 65 52 65 55 63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 3:
      // Fatou Diallo : Femme noire rayonnante avec belle coupe afro naturelle
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#DCFCE7" />
          {/* Coupe Afro volumineuse texturée */}
          <circle cx="50" cy="42" r="32" fill="#1A120D" />
          <circle cx="28" cy="38" r="16" fill="#1A120D" />
          <circle cx="72" cy="38" r="16" fill="#1A120D" />
          <circle cx="50" cy="20" r="18" fill="#1A120D" />
          {/* Cou et vêtement */}
          <path d="M42 63V74C42 76 44 78 48 78H52C56 78 58 76 58 74V63H42Z" fill="#693E22" />
          <path d="M24 100C24 85 34 80 50 80C66 80 76 85 76 100H24Z" fill="#059669" />
          {/* Collier doré */}
          <path d="M40 79C44 83 56 83 60 79" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Visage */}
          <ellipse cx="50" cy="52" rx="18" ry="20" fill="#7D4E2D" />
          {/* Oreilles et boucles */}
          <ellipse cx="32" cy="53" rx="3" ry="5" fill="#693E22" />
          <ellipse cx="68" cy="53" rx="3" ry="5" fill="#693E22" />
          <circle cx="31" cy="58" r="3" fill="#F59E0B" />
          <circle cx="69" cy="58" r="3" fill="#F59E0B" />
          {/* Yeux expressifs et souriants */}
          <ellipse cx="43" cy="50" rx="2.8" ry="3.2" fill="#1A120D" />
          <ellipse cx="57" cy="50" rx="2.8" ry="3.2" fill="#1A120D" />
          <circle cx="44" cy="49" r="1" fill="#FFFFFF" />
          <circle cx="58" cy="49" r="1" fill="#FFFFFF" />
          <path d="M39 45C42 43 45 44 47 46" stroke="#1A120D" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M61 45C58 43 55 44 53 46" stroke="#1A120D" strokeWidth="1.8" strokeLinecap="round" />
          {/* Nez */}
          <path d="M50 51V56C48.5 56 48 57.5 50 58C52 57.5 51.5 56 50 56" stroke="#5B331A" strokeWidth="1.6" strokeLinecap="round" />
          {/* Grand sourire chaleureux */}
          <path d="M43 62C46 66 54 66 57 62" stroke="#9A4F38" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 62C48 64 52 64 55 62" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 4:
      // David Mendy : Homme noir dynamique avec dégradé et grand sourire
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#FEF9C3" />
          {/* Cou et t-shirt */}
          <path d="M41 64V73C41 75 43 77 47 78H53C57 77 59 75 59 73V64H41Z" fill="#492916" />
          <path d="M22 100C22 84 32 78 50 78C68 78 78 84 78 100H22Z" fill="#374151" />
          <path d="M42 78C46 83 54 83 58 78" stroke="#EA580C" strokeWidth="3" fill="none" />
          {/* Cheveux dégradé court sur les côtés */}
          <path d="M32 36C32 22 40 16 50 16C60 16 68 22 68 36C68 39 67 43 67 43H33C33 43 32 39 32 36Z" fill="#140D09" />
          {/* Visage */}
          <rect x="32" y="32" width="36" height="34" rx="16" fill="#58341D" />
          {/* Oreilles */}
          <ellipse cx="30" cy="49" rx="3.5" ry="5.5" fill="#492916" />
          <ellipse cx="70" cy="49" rx="3.5" ry="5.5" fill="#492916" />
          {/* Yeux */}
          <ellipse cx="42" cy="46" rx="2.8" ry="3" fill="#140D09" />
          <ellipse cx="58" cy="46" rx="2.8" ry="3" fill="#140D09" />
          <circle cx="43" cy="45" r="1" fill="#FFFFFF" />
          <circle cx="59" cy="45" r="1" fill="#FFFFFF" />
          <path d="M38 41C41 40 44 41 46 42" stroke="#140D09" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 41C59 40 56 41 54 42" stroke="#140D09" strokeWidth="2" strokeLinecap="round" />
          {/* Nez */}
          <path d="M50 47V52C48.5 52 48 53.5 50 54C52 53.5 51.5 52 50 52" stroke="#3D2010" strokeWidth="1.6" strokeLinecap="round" />
          {/* Sourire éclatant avec dents blanches */}
          <path d="M41 59C44 65 56 65 59 59Z" fill="#FFFFFF" />
          <path d="M40 59C44 66 56 66 60 59" stroke="#7A3C2A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 5:
      // Aïcha Soglo : Femme noire élégante avec turban traditionnel moderne (Gele/Headwrap)
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#FFE4E6" />
          {/* Turban stylé noué (Gele) en jaune ambré et motifs */}
          <path d="M26 36C24 22 36 12 50 12C64 12 76 22 74 36C74 42 70 46 68 46H32C30 46 26 42 26 36Z" fill="#D97706" />
          <path d="M34 26C42 16 58 16 66 26C58 20 42 20 34 26Z" fill="#B45309" />
          <circle cx="50" cy="22" r="8" fill="#F59E0B" />
          <path d="M28 34C38 30 62 30 72 34" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" />
          {/* Cou et vêtement */}
          <path d="M42 63V74C42 76 44 78 48 78H52C56 78 58 76 58 74V63H42Z" fill="#5F361E" />
          <path d="M24 100C24 85 34 80 50 80C66 80 76 85 76 100H24Z" fill="#CA8A04" />
          {/* Visage */}
          <ellipse cx="50" cy="52" rx="18" ry="19" fill="#724429" />
          {/* Oreilles et boucles dorées pendantes */}
          <ellipse cx="32" cy="53" rx="3" ry="5" fill="#5F361E" />
          <ellipse cx="68" cy="53" rx="3" ry="5" fill="#5F361E" />
          <path d="M31 56L31 63" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="31" cy="64" r="2.5" fill="#F59E0B" />
          <path d="M69 56L69 63" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="69" cy="64" r="2.5" fill="#F59E0B" />
          {/* Yeux en amande */}
          <ellipse cx="43" cy="50" rx="3" ry="3.2" fill="#1A110C" />
          <ellipse cx="57" cy="50" rx="3.2" ry="3.2" fill="#1A110C" />
          <circle cx="44" cy="49" r="1" fill="#FFFFFF" />
          <circle cx="58" cy="49" r="1" fill="#FFFFFF" />
          <path d="M39 45C42 43 45 44 47 46" stroke="#1A110C" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M61 45C58 43 55 44 53 46" stroke="#1A110C" strokeWidth="1.8" strokeLinecap="round" />
          {/* Nez */}
          <path d="M50 51V55C48.5 55 48 56.5 50 57C52 56.5 51.5 55 50 55" stroke="#522C17" strokeWidth="1.6" strokeLinecap="round" />
          {/* Lèvres douces */}
          <path d="M44 62C47 65 53 65 56 62" stroke="#9E4D38" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );

    case 6:
    default:
      // Kévin Dossou : Homme noir avec dreadlocks courtes stylées et polo moutarde
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#EDE9FE" />
          {/* Dreads courtes arrière */}
          <circle cx="36" cy="28" r="6" fill="#150E0A" />
          <circle cx="44" cy="24" r="6.5" fill="#150E0A" />
          <circle cx="56" cy="24" r="6.5" fill="#150E0A" />
          <circle cx="64" cy="28" r="6" fill="#150E0A" />
          {/* Cou et polo */}
          <path d="M41 64V73C41 75 43 77 47 78H53C57 77 59 75 59 73V64H41Z" fill="#432515" />
          <path d="M22 100C22 84 32 78 50 78C68 78 78 84 78 100H22Z" fill="#D97706" />
          {/* Col polo */}
          <path d="M42 78L50 86L44 92L38 82L42 78Z" fill="#B45309" />
          <path d="M58 78L50 86L56 92L62 82L58 78Z" fill="#92400E" />
          {/* Visage */}
          <rect x="32" y="32" width="36" height="34" rx="16" fill="#52311C" />
          {/* Dreads tombant sur le front/côtés */}
          <path d="M36 28C34 34 32 40 33 46" stroke="#150E0A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M43 25C42 32 40 38 41 42" stroke="#150E0A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M57 25C58 32 60 38 59 42" stroke="#150E0A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M64 28C66 34 68 40 67 46" stroke="#150E0A" strokeWidth="4.5" strokeLinecap="round" />
          {/* Oreilles */}
          <ellipse cx="30" cy="49" rx="3.5" ry="5.5" fill="#432515" />
          <ellipse cx="70" cy="49" rx="3.5" ry="5.5" fill="#432515" />
          {/* Bouc élégant */}
          <ellipse cx="50" cy="64" rx="4" ry="2.5" fill="#150E0A" />
          {/* Yeux */}
          <ellipse cx="42" cy="47" rx="2.8" ry="3" fill="#150E0A" />
          <ellipse cx="58" cy="47" rx="2.8" ry="3" fill="#150E0A" />
          <circle cx="43" cy="46" r="1" fill="#FFFFFF" />
          <circle cx="59" cy="46" r="1" fill="#FFFFFF" />
          <path d="M38 42C41 41 44 42 46 43" stroke="#150E0A" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 42C59 41 56 42 54 43" stroke="#150E0A" strokeWidth="2" strokeLinecap="round" />
          {/* Nez */}
          <path d="M50 48V53C48.5 53 48 54.5 50 55C52 54.5 51.5 53 50 53" stroke="#371B0E" strokeWidth="1.6" strokeLinecap="round" />
          {/* Sourire */}
          <path d="M43 59C46 63 54 63 57 59" stroke="#8A422F" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
  }
};
