# Vložení seznamu promoakcí

<!-- tags: promoakce, speciální nabídky, promo, seznam, front-end, supporting texts -->

Na front-end svého GOL IBE můžeš přidat seznam aktuálních promoakcí a speciálních nabídek. Zákazníci je uvidí přímo na hlavní stránce nebo v určené sekci webu.

## Jak vložit seznam promoakcí

1. Přihlas se do administračního konzole GOL IBE.
2. Jdi do sekce **Supporting texts → Supporting texts**.
3. Klikni na **Add text**.
4. Vyplň:
   - **Name** — název textu (doporučujeme např. „Promoakce" nebo „Special offers")
   - **Text type** — vyber typ odpovídající promoakcím nebo použij volný text (Free text)
   - **Language** — jazyk, ve kterém front-end funguje
   - **Body** — vlož HTML nebo prostý text se seznamem nabídek
5. Klikni **Save**.

## Příklad obsahu (HTML)

```html
<ul>
  <li><strong>Praha – Londýn</strong> od 1 990 Kč – platí do 30. 4.</li>
  <li><strong>Praha – Barcelona</strong> od 2 490 Kč – pouze víkendy</li>
  <li><strong>Praha – Dubai</strong> od 8 900 Kč – letní nabídka</li>
</ul>
```

## Tipy

- Po uložení jdi do **Code Lists → Flush HTML Caches**, aby se změny projevily okamžitě
- Promoakce s datem expirace odstraň nebo aktualizuj ručně — systém je automaticky neskrývá
- Pro opakující se akce si připrav šablonu a jen aktualizuj ceny a termíny
